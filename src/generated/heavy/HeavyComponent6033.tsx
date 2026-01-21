'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6033<T> = T extends (infer U)[]
  ? DeepReadonlyArray6033<U>
  : T extends object
  ? DeepReadonlyObject6033<T>
  : T;

interface DeepReadonlyArray6033<T> extends ReadonlyArray<DeepReadonly6033<T>> {}

type DeepReadonlyObject6033<T> = {
  readonly [P in keyof T]: DeepReadonly6033<T[P]>;
};

type UnionToIntersection6033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6033<T> = UnionToIntersection6033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6033<T extends unknown[], V> = [...T, V];

type TuplifyUnion6033<T, L = LastOf6033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6033<TuplifyUnion6033<Exclude<T, L>>, L>;

type DeepPartial6033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6033<T[P]> }
  : T;

type Paths6033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6033<K, Paths6033<T[K], Prev6033[D]>> : never }[keyof T]
  : never;

type Prev6033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6033 {
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

type ConfigPaths6033 = Paths6033<NestedConfig6033>;

interface HeavyProps6033 {
  config: DeepPartial6033<NestedConfig6033>;
  path?: ConfigPaths6033;
}

const HeavyComponent6033 = memo(function HeavyComponent6033({ config }: HeavyProps6033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6033.displayName = 'HeavyComponent6033';
export default HeavyComponent6033;
