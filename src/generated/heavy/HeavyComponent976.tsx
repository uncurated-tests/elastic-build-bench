'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly976<T> = T extends (infer U)[]
  ? DeepReadonlyArray976<U>
  : T extends object
  ? DeepReadonlyObject976<T>
  : T;

interface DeepReadonlyArray976<T> extends ReadonlyArray<DeepReadonly976<T>> {}

type DeepReadonlyObject976<T> = {
  readonly [P in keyof T]: DeepReadonly976<T[P]>;
};

type UnionToIntersection976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf976<T> = UnionToIntersection976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push976<T extends unknown[], V> = [...T, V];

type TuplifyUnion976<T, L = LastOf976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push976<TuplifyUnion976<Exclude<T, L>>, L>;

type DeepPartial976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial976<T[P]> }
  : T;

type Paths976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join976<K, Paths976<T[K], Prev976[D]>> : never }[keyof T]
  : never;

type Prev976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig976 {
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

type ConfigPaths976 = Paths976<NestedConfig976>;

interface HeavyProps976 {
  config: DeepPartial976<NestedConfig976>;
  path?: ConfigPaths976;
}

const HeavyComponent976 = memo(function HeavyComponent976({ config }: HeavyProps976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent976.displayName = 'HeavyComponent976';
export default HeavyComponent976;
