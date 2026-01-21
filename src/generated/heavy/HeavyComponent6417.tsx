'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6417<T> = T extends (infer U)[]
  ? DeepReadonlyArray6417<U>
  : T extends object
  ? DeepReadonlyObject6417<T>
  : T;

interface DeepReadonlyArray6417<T> extends ReadonlyArray<DeepReadonly6417<T>> {}

type DeepReadonlyObject6417<T> = {
  readonly [P in keyof T]: DeepReadonly6417<T[P]>;
};

type UnionToIntersection6417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6417<T> = UnionToIntersection6417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6417<T extends unknown[], V> = [...T, V];

type TuplifyUnion6417<T, L = LastOf6417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6417<TuplifyUnion6417<Exclude<T, L>>, L>;

type DeepPartial6417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6417<T[P]> }
  : T;

type Paths6417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6417<K, Paths6417<T[K], Prev6417[D]>> : never }[keyof T]
  : never;

type Prev6417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6417 {
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

type ConfigPaths6417 = Paths6417<NestedConfig6417>;

interface HeavyProps6417 {
  config: DeepPartial6417<NestedConfig6417>;
  path?: ConfigPaths6417;
}

const HeavyComponent6417 = memo(function HeavyComponent6417({ config }: HeavyProps6417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6417.displayName = 'HeavyComponent6417';
export default HeavyComponent6417;
