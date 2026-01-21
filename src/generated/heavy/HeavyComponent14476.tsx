'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14476<T> = T extends (infer U)[]
  ? DeepReadonlyArray14476<U>
  : T extends object
  ? DeepReadonlyObject14476<T>
  : T;

interface DeepReadonlyArray14476<T> extends ReadonlyArray<DeepReadonly14476<T>> {}

type DeepReadonlyObject14476<T> = {
  readonly [P in keyof T]: DeepReadonly14476<T[P]>;
};

type UnionToIntersection14476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14476<T> = UnionToIntersection14476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14476<T extends unknown[], V> = [...T, V];

type TuplifyUnion14476<T, L = LastOf14476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14476<TuplifyUnion14476<Exclude<T, L>>, L>;

type DeepPartial14476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14476<T[P]> }
  : T;

type Paths14476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14476<K, Paths14476<T[K], Prev14476[D]>> : never }[keyof T]
  : never;

type Prev14476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14476 {
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

type ConfigPaths14476 = Paths14476<NestedConfig14476>;

interface HeavyProps14476 {
  config: DeepPartial14476<NestedConfig14476>;
  path?: ConfigPaths14476;
}

const HeavyComponent14476 = memo(function HeavyComponent14476({ config }: HeavyProps14476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14476.displayName = 'HeavyComponent14476';
export default HeavyComponent14476;
