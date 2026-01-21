'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6009<T> = T extends (infer U)[]
  ? DeepReadonlyArray6009<U>
  : T extends object
  ? DeepReadonlyObject6009<T>
  : T;

interface DeepReadonlyArray6009<T> extends ReadonlyArray<DeepReadonly6009<T>> {}

type DeepReadonlyObject6009<T> = {
  readonly [P in keyof T]: DeepReadonly6009<T[P]>;
};

type UnionToIntersection6009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6009<T> = UnionToIntersection6009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6009<T extends unknown[], V> = [...T, V];

type TuplifyUnion6009<T, L = LastOf6009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6009<TuplifyUnion6009<Exclude<T, L>>, L>;

type DeepPartial6009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6009<T[P]> }
  : T;

type Paths6009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6009<K, Paths6009<T[K], Prev6009[D]>> : never }[keyof T]
  : never;

type Prev6009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6009 {
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

type ConfigPaths6009 = Paths6009<NestedConfig6009>;

interface HeavyProps6009 {
  config: DeepPartial6009<NestedConfig6009>;
  path?: ConfigPaths6009;
}

const HeavyComponent6009 = memo(function HeavyComponent6009({ config }: HeavyProps6009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6009.displayName = 'HeavyComponent6009';
export default HeavyComponent6009;
