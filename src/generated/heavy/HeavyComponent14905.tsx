'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14905<T> = T extends (infer U)[]
  ? DeepReadonlyArray14905<U>
  : T extends object
  ? DeepReadonlyObject14905<T>
  : T;

interface DeepReadonlyArray14905<T> extends ReadonlyArray<DeepReadonly14905<T>> {}

type DeepReadonlyObject14905<T> = {
  readonly [P in keyof T]: DeepReadonly14905<T[P]>;
};

type UnionToIntersection14905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14905<T> = UnionToIntersection14905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14905<T extends unknown[], V> = [...T, V];

type TuplifyUnion14905<T, L = LastOf14905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14905<TuplifyUnion14905<Exclude<T, L>>, L>;

type DeepPartial14905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14905<T[P]> }
  : T;

type Paths14905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14905<K, Paths14905<T[K], Prev14905[D]>> : never }[keyof T]
  : never;

type Prev14905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14905 {
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

type ConfigPaths14905 = Paths14905<NestedConfig14905>;

interface HeavyProps14905 {
  config: DeepPartial14905<NestedConfig14905>;
  path?: ConfigPaths14905;
}

const HeavyComponent14905 = memo(function HeavyComponent14905({ config }: HeavyProps14905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14905.displayName = 'HeavyComponent14905';
export default HeavyComponent14905;
