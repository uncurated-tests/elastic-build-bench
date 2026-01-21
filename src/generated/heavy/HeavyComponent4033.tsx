'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4033<T> = T extends (infer U)[]
  ? DeepReadonlyArray4033<U>
  : T extends object
  ? DeepReadonlyObject4033<T>
  : T;

interface DeepReadonlyArray4033<T> extends ReadonlyArray<DeepReadonly4033<T>> {}

type DeepReadonlyObject4033<T> = {
  readonly [P in keyof T]: DeepReadonly4033<T[P]>;
};

type UnionToIntersection4033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4033<T> = UnionToIntersection4033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4033<T extends unknown[], V> = [...T, V];

type TuplifyUnion4033<T, L = LastOf4033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4033<TuplifyUnion4033<Exclude<T, L>>, L>;

type DeepPartial4033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4033<T[P]> }
  : T;

type Paths4033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4033<K, Paths4033<T[K], Prev4033[D]>> : never }[keyof T]
  : never;

type Prev4033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4033 {
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

type ConfigPaths4033 = Paths4033<NestedConfig4033>;

interface HeavyProps4033 {
  config: DeepPartial4033<NestedConfig4033>;
  path?: ConfigPaths4033;
}

const HeavyComponent4033 = memo(function HeavyComponent4033({ config }: HeavyProps4033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4033.displayName = 'HeavyComponent4033';
export default HeavyComponent4033;
