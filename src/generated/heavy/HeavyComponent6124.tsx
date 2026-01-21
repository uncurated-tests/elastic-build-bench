'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6124<T> = T extends (infer U)[]
  ? DeepReadonlyArray6124<U>
  : T extends object
  ? DeepReadonlyObject6124<T>
  : T;

interface DeepReadonlyArray6124<T> extends ReadonlyArray<DeepReadonly6124<T>> {}

type DeepReadonlyObject6124<T> = {
  readonly [P in keyof T]: DeepReadonly6124<T[P]>;
};

type UnionToIntersection6124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6124<T> = UnionToIntersection6124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6124<T extends unknown[], V> = [...T, V];

type TuplifyUnion6124<T, L = LastOf6124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6124<TuplifyUnion6124<Exclude<T, L>>, L>;

type DeepPartial6124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6124<T[P]> }
  : T;

type Paths6124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6124<K, Paths6124<T[K], Prev6124[D]>> : never }[keyof T]
  : never;

type Prev6124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6124 {
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

type ConfigPaths6124 = Paths6124<NestedConfig6124>;

interface HeavyProps6124 {
  config: DeepPartial6124<NestedConfig6124>;
  path?: ConfigPaths6124;
}

const HeavyComponent6124 = memo(function HeavyComponent6124({ config }: HeavyProps6124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6124.displayName = 'HeavyComponent6124';
export default HeavyComponent6124;
