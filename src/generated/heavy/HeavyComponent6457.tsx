'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6457<T> = T extends (infer U)[]
  ? DeepReadonlyArray6457<U>
  : T extends object
  ? DeepReadonlyObject6457<T>
  : T;

interface DeepReadonlyArray6457<T> extends ReadonlyArray<DeepReadonly6457<T>> {}

type DeepReadonlyObject6457<T> = {
  readonly [P in keyof T]: DeepReadonly6457<T[P]>;
};

type UnionToIntersection6457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6457<T> = UnionToIntersection6457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6457<T extends unknown[], V> = [...T, V];

type TuplifyUnion6457<T, L = LastOf6457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6457<TuplifyUnion6457<Exclude<T, L>>, L>;

type DeepPartial6457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6457<T[P]> }
  : T;

type Paths6457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6457<K, Paths6457<T[K], Prev6457[D]>> : never }[keyof T]
  : never;

type Prev6457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6457 {
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

type ConfigPaths6457 = Paths6457<NestedConfig6457>;

interface HeavyProps6457 {
  config: DeepPartial6457<NestedConfig6457>;
  path?: ConfigPaths6457;
}

const HeavyComponent6457 = memo(function HeavyComponent6457({ config }: HeavyProps6457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6457.displayName = 'HeavyComponent6457';
export default HeavyComponent6457;
