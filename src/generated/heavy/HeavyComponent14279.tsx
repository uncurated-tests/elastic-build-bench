'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14279<T> = T extends (infer U)[]
  ? DeepReadonlyArray14279<U>
  : T extends object
  ? DeepReadonlyObject14279<T>
  : T;

interface DeepReadonlyArray14279<T> extends ReadonlyArray<DeepReadonly14279<T>> {}

type DeepReadonlyObject14279<T> = {
  readonly [P in keyof T]: DeepReadonly14279<T[P]>;
};

type UnionToIntersection14279<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14279<T> = UnionToIntersection14279<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14279<T extends unknown[], V> = [...T, V];

type TuplifyUnion14279<T, L = LastOf14279<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14279<TuplifyUnion14279<Exclude<T, L>>, L>;

type DeepPartial14279<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14279<T[P]> }
  : T;

type Paths14279<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14279<K, Paths14279<T[K], Prev14279[D]>> : never }[keyof T]
  : never;

type Prev14279 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14279<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14279 {
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

type ConfigPaths14279 = Paths14279<NestedConfig14279>;

interface HeavyProps14279 {
  config: DeepPartial14279<NestedConfig14279>;
  path?: ConfigPaths14279;
}

const HeavyComponent14279 = memo(function HeavyComponent14279({ config }: HeavyProps14279) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14279) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14279 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14279: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14279.displayName = 'HeavyComponent14279';
export default HeavyComponent14279;
