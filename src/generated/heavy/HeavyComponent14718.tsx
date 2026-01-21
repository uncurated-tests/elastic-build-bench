'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14718<T> = T extends (infer U)[]
  ? DeepReadonlyArray14718<U>
  : T extends object
  ? DeepReadonlyObject14718<T>
  : T;

interface DeepReadonlyArray14718<T> extends ReadonlyArray<DeepReadonly14718<T>> {}

type DeepReadonlyObject14718<T> = {
  readonly [P in keyof T]: DeepReadonly14718<T[P]>;
};

type UnionToIntersection14718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14718<T> = UnionToIntersection14718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14718<T extends unknown[], V> = [...T, V];

type TuplifyUnion14718<T, L = LastOf14718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14718<TuplifyUnion14718<Exclude<T, L>>, L>;

type DeepPartial14718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14718<T[P]> }
  : T;

type Paths14718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14718<K, Paths14718<T[K], Prev14718[D]>> : never }[keyof T]
  : never;

type Prev14718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14718 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14718 = Paths14718<NestedConfig14718>;

interface HeavyProps14718 {
  config: DeepPartial14718<NestedConfig14718>;
  path?: ConfigPaths14718;
}

const HeavyComponent14718 = memo(function HeavyComponent14718({ config }: HeavyProps14718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14718.displayName = 'HeavyComponent14718';
export default HeavyComponent14718;
