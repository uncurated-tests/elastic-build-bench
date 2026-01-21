'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14592<T> = T extends (infer U)[]
  ? DeepReadonlyArray14592<U>
  : T extends object
  ? DeepReadonlyObject14592<T>
  : T;

interface DeepReadonlyArray14592<T> extends ReadonlyArray<DeepReadonly14592<T>> {}

type DeepReadonlyObject14592<T> = {
  readonly [P in keyof T]: DeepReadonly14592<T[P]>;
};

type UnionToIntersection14592<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14592<T> = UnionToIntersection14592<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14592<T extends unknown[], V> = [...T, V];

type TuplifyUnion14592<T, L = LastOf14592<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14592<TuplifyUnion14592<Exclude<T, L>>, L>;

type DeepPartial14592<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14592<T[P]> }
  : T;

type Paths14592<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14592<K, Paths14592<T[K], Prev14592[D]>> : never }[keyof T]
  : never;

type Prev14592 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14592<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14592 {
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

type ConfigPaths14592 = Paths14592<NestedConfig14592>;

interface HeavyProps14592 {
  config: DeepPartial14592<NestedConfig14592>;
  path?: ConfigPaths14592;
}

const HeavyComponent14592 = memo(function HeavyComponent14592({ config }: HeavyProps14592) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14592) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14592 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14592: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14592.displayName = 'HeavyComponent14592';
export default HeavyComponent14592;
