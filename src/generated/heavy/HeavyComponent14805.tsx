'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14805<T> = T extends (infer U)[]
  ? DeepReadonlyArray14805<U>
  : T extends object
  ? DeepReadonlyObject14805<T>
  : T;

interface DeepReadonlyArray14805<T> extends ReadonlyArray<DeepReadonly14805<T>> {}

type DeepReadonlyObject14805<T> = {
  readonly [P in keyof T]: DeepReadonly14805<T[P]>;
};

type UnionToIntersection14805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14805<T> = UnionToIntersection14805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14805<T extends unknown[], V> = [...T, V];

type TuplifyUnion14805<T, L = LastOf14805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14805<TuplifyUnion14805<Exclude<T, L>>, L>;

type DeepPartial14805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14805<T[P]> }
  : T;

type Paths14805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14805<K, Paths14805<T[K], Prev14805[D]>> : never }[keyof T]
  : never;

type Prev14805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14805 {
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

type ConfigPaths14805 = Paths14805<NestedConfig14805>;

interface HeavyProps14805 {
  config: DeepPartial14805<NestedConfig14805>;
  path?: ConfigPaths14805;
}

const HeavyComponent14805 = memo(function HeavyComponent14805({ config }: HeavyProps14805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14805.displayName = 'HeavyComponent14805';
export default HeavyComponent14805;
