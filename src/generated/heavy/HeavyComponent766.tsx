'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly766<T> = T extends (infer U)[]
  ? DeepReadonlyArray766<U>
  : T extends object
  ? DeepReadonlyObject766<T>
  : T;

interface DeepReadonlyArray766<T> extends ReadonlyArray<DeepReadonly766<T>> {}

type DeepReadonlyObject766<T> = {
  readonly [P in keyof T]: DeepReadonly766<T[P]>;
};

type UnionToIntersection766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf766<T> = UnionToIntersection766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push766<T extends unknown[], V> = [...T, V];

type TuplifyUnion766<T, L = LastOf766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push766<TuplifyUnion766<Exclude<T, L>>, L>;

type DeepPartial766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial766<T[P]> }
  : T;

type Paths766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join766<K, Paths766<T[K], Prev766[D]>> : never }[keyof T]
  : never;

type Prev766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig766 {
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

type ConfigPaths766 = Paths766<NestedConfig766>;

interface HeavyProps766 {
  config: DeepPartial766<NestedConfig766>;
  path?: ConfigPaths766;
}

const HeavyComponent766 = memo(function HeavyComponent766({ config }: HeavyProps766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent766.displayName = 'HeavyComponent766';
export default HeavyComponent766;
