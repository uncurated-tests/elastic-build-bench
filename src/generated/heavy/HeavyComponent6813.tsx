'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6813<T> = T extends (infer U)[]
  ? DeepReadonlyArray6813<U>
  : T extends object
  ? DeepReadonlyObject6813<T>
  : T;

interface DeepReadonlyArray6813<T> extends ReadonlyArray<DeepReadonly6813<T>> {}

type DeepReadonlyObject6813<T> = {
  readonly [P in keyof T]: DeepReadonly6813<T[P]>;
};

type UnionToIntersection6813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6813<T> = UnionToIntersection6813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6813<T extends unknown[], V> = [...T, V];

type TuplifyUnion6813<T, L = LastOf6813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6813<TuplifyUnion6813<Exclude<T, L>>, L>;

type DeepPartial6813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6813<T[P]> }
  : T;

type Paths6813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6813<K, Paths6813<T[K], Prev6813[D]>> : never }[keyof T]
  : never;

type Prev6813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6813 {
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

type ConfigPaths6813 = Paths6813<NestedConfig6813>;

interface HeavyProps6813 {
  config: DeepPartial6813<NestedConfig6813>;
  path?: ConfigPaths6813;
}

const HeavyComponent6813 = memo(function HeavyComponent6813({ config }: HeavyProps6813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6813.displayName = 'HeavyComponent6813';
export default HeavyComponent6813;
