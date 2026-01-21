'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6522<T> = T extends (infer U)[]
  ? DeepReadonlyArray6522<U>
  : T extends object
  ? DeepReadonlyObject6522<T>
  : T;

interface DeepReadonlyArray6522<T> extends ReadonlyArray<DeepReadonly6522<T>> {}

type DeepReadonlyObject6522<T> = {
  readonly [P in keyof T]: DeepReadonly6522<T[P]>;
};

type UnionToIntersection6522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6522<T> = UnionToIntersection6522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6522<T extends unknown[], V> = [...T, V];

type TuplifyUnion6522<T, L = LastOf6522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6522<TuplifyUnion6522<Exclude<T, L>>, L>;

type DeepPartial6522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6522<T[P]> }
  : T;

type Paths6522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6522<K, Paths6522<T[K], Prev6522[D]>> : never }[keyof T]
  : never;

type Prev6522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6522 {
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

type ConfigPaths6522 = Paths6522<NestedConfig6522>;

interface HeavyProps6522 {
  config: DeepPartial6522<NestedConfig6522>;
  path?: ConfigPaths6522;
}

const HeavyComponent6522 = memo(function HeavyComponent6522({ config }: HeavyProps6522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6522.displayName = 'HeavyComponent6522';
export default HeavyComponent6522;
