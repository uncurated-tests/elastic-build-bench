'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6394<T> = T extends (infer U)[]
  ? DeepReadonlyArray6394<U>
  : T extends object
  ? DeepReadonlyObject6394<T>
  : T;

interface DeepReadonlyArray6394<T> extends ReadonlyArray<DeepReadonly6394<T>> {}

type DeepReadonlyObject6394<T> = {
  readonly [P in keyof T]: DeepReadonly6394<T[P]>;
};

type UnionToIntersection6394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6394<T> = UnionToIntersection6394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6394<T extends unknown[], V> = [...T, V];

type TuplifyUnion6394<T, L = LastOf6394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6394<TuplifyUnion6394<Exclude<T, L>>, L>;

type DeepPartial6394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6394<T[P]> }
  : T;

type Paths6394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6394<K, Paths6394<T[K], Prev6394[D]>> : never }[keyof T]
  : never;

type Prev6394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6394 {
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

type ConfigPaths6394 = Paths6394<NestedConfig6394>;

interface HeavyProps6394 {
  config: DeepPartial6394<NestedConfig6394>;
  path?: ConfigPaths6394;
}

const HeavyComponent6394 = memo(function HeavyComponent6394({ config }: HeavyProps6394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6394.displayName = 'HeavyComponent6394';
export default HeavyComponent6394;
