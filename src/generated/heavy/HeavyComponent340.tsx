'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly340<T> = T extends (infer U)[]
  ? DeepReadonlyArray340<U>
  : T extends object
  ? DeepReadonlyObject340<T>
  : T;

interface DeepReadonlyArray340<T> extends ReadonlyArray<DeepReadonly340<T>> {}

type DeepReadonlyObject340<T> = {
  readonly [P in keyof T]: DeepReadonly340<T[P]>;
};

type UnionToIntersection340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf340<T> = UnionToIntersection340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push340<T extends unknown[], V> = [...T, V];

type TuplifyUnion340<T, L = LastOf340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push340<TuplifyUnion340<Exclude<T, L>>, L>;

type DeepPartial340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial340<T[P]> }
  : T;

type Paths340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join340<K, Paths340<T[K], Prev340[D]>> : never }[keyof T]
  : never;

type Prev340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig340 {
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

type ConfigPaths340 = Paths340<NestedConfig340>;

interface HeavyProps340 {
  config: DeepPartial340<NestedConfig340>;
  path?: ConfigPaths340;
}

const HeavyComponent340 = memo(function HeavyComponent340({ config }: HeavyProps340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent340.displayName = 'HeavyComponent340';
export default HeavyComponent340;
