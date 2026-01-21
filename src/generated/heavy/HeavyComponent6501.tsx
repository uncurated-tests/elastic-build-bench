'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6501<T> = T extends (infer U)[]
  ? DeepReadonlyArray6501<U>
  : T extends object
  ? DeepReadonlyObject6501<T>
  : T;

interface DeepReadonlyArray6501<T> extends ReadonlyArray<DeepReadonly6501<T>> {}

type DeepReadonlyObject6501<T> = {
  readonly [P in keyof T]: DeepReadonly6501<T[P]>;
};

type UnionToIntersection6501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6501<T> = UnionToIntersection6501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6501<T extends unknown[], V> = [...T, V];

type TuplifyUnion6501<T, L = LastOf6501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6501<TuplifyUnion6501<Exclude<T, L>>, L>;

type DeepPartial6501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6501<T[P]> }
  : T;

type Paths6501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6501<K, Paths6501<T[K], Prev6501[D]>> : never }[keyof T]
  : never;

type Prev6501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6501 {
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

type ConfigPaths6501 = Paths6501<NestedConfig6501>;

interface HeavyProps6501 {
  config: DeepPartial6501<NestedConfig6501>;
  path?: ConfigPaths6501;
}

const HeavyComponent6501 = memo(function HeavyComponent6501({ config }: HeavyProps6501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6501.displayName = 'HeavyComponent6501';
export default HeavyComponent6501;
