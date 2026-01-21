'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6252<T> = T extends (infer U)[]
  ? DeepReadonlyArray6252<U>
  : T extends object
  ? DeepReadonlyObject6252<T>
  : T;

interface DeepReadonlyArray6252<T> extends ReadonlyArray<DeepReadonly6252<T>> {}

type DeepReadonlyObject6252<T> = {
  readonly [P in keyof T]: DeepReadonly6252<T[P]>;
};

type UnionToIntersection6252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6252<T> = UnionToIntersection6252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6252<T extends unknown[], V> = [...T, V];

type TuplifyUnion6252<T, L = LastOf6252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6252<TuplifyUnion6252<Exclude<T, L>>, L>;

type DeepPartial6252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6252<T[P]> }
  : T;

type Paths6252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6252<K, Paths6252<T[K], Prev6252[D]>> : never }[keyof T]
  : never;

type Prev6252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6252 {
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

type ConfigPaths6252 = Paths6252<NestedConfig6252>;

interface HeavyProps6252 {
  config: DeepPartial6252<NestedConfig6252>;
  path?: ConfigPaths6252;
}

const HeavyComponent6252 = memo(function HeavyComponent6252({ config }: HeavyProps6252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6252.displayName = 'HeavyComponent6252';
export default HeavyComponent6252;
