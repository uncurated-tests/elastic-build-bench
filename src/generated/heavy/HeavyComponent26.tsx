'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly26<T> = T extends (infer U)[]
  ? DeepReadonlyArray26<U>
  : T extends object
  ? DeepReadonlyObject26<T>
  : T;

interface DeepReadonlyArray26<T> extends ReadonlyArray<DeepReadonly26<T>> {}

type DeepReadonlyObject26<T> = {
  readonly [P in keyof T]: DeepReadonly26<T[P]>;
};

type UnionToIntersection26<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf26<T> = UnionToIntersection26<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push26<T extends unknown[], V> = [...T, V];

type TuplifyUnion26<T, L = LastOf26<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push26<TuplifyUnion26<Exclude<T, L>>, L>;

type DeepPartial26<T> = T extends object
  ? { [P in keyof T]?: DeepPartial26<T[P]> }
  : T;

type Paths26<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join26<K, Paths26<T[K], Prev26[D]>> : never }[keyof T]
  : never;

type Prev26 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join26<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig26 {
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

type ConfigPaths26 = Paths26<NestedConfig26>;

interface HeavyProps26 {
  config: DeepPartial26<NestedConfig26>;
  path?: ConfigPaths26;
}

const HeavyComponent26 = memo(function HeavyComponent26({ config }: HeavyProps26) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 26) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-26 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H26: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent26.displayName = 'HeavyComponent26';
export default HeavyComponent26;
