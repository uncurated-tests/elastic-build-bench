'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6129<T> = T extends (infer U)[]
  ? DeepReadonlyArray6129<U>
  : T extends object
  ? DeepReadonlyObject6129<T>
  : T;

interface DeepReadonlyArray6129<T> extends ReadonlyArray<DeepReadonly6129<T>> {}

type DeepReadonlyObject6129<T> = {
  readonly [P in keyof T]: DeepReadonly6129<T[P]>;
};

type UnionToIntersection6129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6129<T> = UnionToIntersection6129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6129<T extends unknown[], V> = [...T, V];

type TuplifyUnion6129<T, L = LastOf6129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6129<TuplifyUnion6129<Exclude<T, L>>, L>;

type DeepPartial6129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6129<T[P]> }
  : T;

type Paths6129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6129<K, Paths6129<T[K], Prev6129[D]>> : never }[keyof T]
  : never;

type Prev6129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6129 {
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

type ConfigPaths6129 = Paths6129<NestedConfig6129>;

interface HeavyProps6129 {
  config: DeepPartial6129<NestedConfig6129>;
  path?: ConfigPaths6129;
}

const HeavyComponent6129 = memo(function HeavyComponent6129({ config }: HeavyProps6129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6129.displayName = 'HeavyComponent6129';
export default HeavyComponent6129;
