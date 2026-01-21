'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly155<T> = T extends (infer U)[]
  ? DeepReadonlyArray155<U>
  : T extends object
  ? DeepReadonlyObject155<T>
  : T;

interface DeepReadonlyArray155<T> extends ReadonlyArray<DeepReadonly155<T>> {}

type DeepReadonlyObject155<T> = {
  readonly [P in keyof T]: DeepReadonly155<T[P]>;
};

type UnionToIntersection155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf155<T> = UnionToIntersection155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push155<T extends unknown[], V> = [...T, V];

type TuplifyUnion155<T, L = LastOf155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push155<TuplifyUnion155<Exclude<T, L>>, L>;

type DeepPartial155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial155<T[P]> }
  : T;

type Paths155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join155<K, Paths155<T[K], Prev155[D]>> : never }[keyof T]
  : never;

type Prev155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig155 {
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

type ConfigPaths155 = Paths155<NestedConfig155>;

interface HeavyProps155 {
  config: DeepPartial155<NestedConfig155>;
  path?: ConfigPaths155;
}

const HeavyComponent155 = memo(function HeavyComponent155({ config }: HeavyProps155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent155.displayName = 'HeavyComponent155';
export default HeavyComponent155;
