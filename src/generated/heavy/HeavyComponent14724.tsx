'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14724<T> = T extends (infer U)[]
  ? DeepReadonlyArray14724<U>
  : T extends object
  ? DeepReadonlyObject14724<T>
  : T;

interface DeepReadonlyArray14724<T> extends ReadonlyArray<DeepReadonly14724<T>> {}

type DeepReadonlyObject14724<T> = {
  readonly [P in keyof T]: DeepReadonly14724<T[P]>;
};

type UnionToIntersection14724<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14724<T> = UnionToIntersection14724<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14724<T extends unknown[], V> = [...T, V];

type TuplifyUnion14724<T, L = LastOf14724<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14724<TuplifyUnion14724<Exclude<T, L>>, L>;

type DeepPartial14724<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14724<T[P]> }
  : T;

type Paths14724<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14724<K, Paths14724<T[K], Prev14724[D]>> : never }[keyof T]
  : never;

type Prev14724 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14724<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14724 {
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

type ConfigPaths14724 = Paths14724<NestedConfig14724>;

interface HeavyProps14724 {
  config: DeepPartial14724<NestedConfig14724>;
  path?: ConfigPaths14724;
}

const HeavyComponent14724 = memo(function HeavyComponent14724({ config }: HeavyProps14724) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14724) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14724 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14724: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14724.displayName = 'HeavyComponent14724';
export default HeavyComponent14724;
