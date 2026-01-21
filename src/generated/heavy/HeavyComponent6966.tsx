'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6966<T> = T extends (infer U)[]
  ? DeepReadonlyArray6966<U>
  : T extends object
  ? DeepReadonlyObject6966<T>
  : T;

interface DeepReadonlyArray6966<T> extends ReadonlyArray<DeepReadonly6966<T>> {}

type DeepReadonlyObject6966<T> = {
  readonly [P in keyof T]: DeepReadonly6966<T[P]>;
};

type UnionToIntersection6966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6966<T> = UnionToIntersection6966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6966<T extends unknown[], V> = [...T, V];

type TuplifyUnion6966<T, L = LastOf6966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6966<TuplifyUnion6966<Exclude<T, L>>, L>;

type DeepPartial6966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6966<T[P]> }
  : T;

type Paths6966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6966<K, Paths6966<T[K], Prev6966[D]>> : never }[keyof T]
  : never;

type Prev6966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6966 {
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

type ConfigPaths6966 = Paths6966<NestedConfig6966>;

interface HeavyProps6966 {
  config: DeepPartial6966<NestedConfig6966>;
  path?: ConfigPaths6966;
}

const HeavyComponent6966 = memo(function HeavyComponent6966({ config }: HeavyProps6966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6966.displayName = 'HeavyComponent6966';
export default HeavyComponent6966;
