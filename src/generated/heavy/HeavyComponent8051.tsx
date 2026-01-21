'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8051<T> = T extends (infer U)[]
  ? DeepReadonlyArray8051<U>
  : T extends object
  ? DeepReadonlyObject8051<T>
  : T;

interface DeepReadonlyArray8051<T> extends ReadonlyArray<DeepReadonly8051<T>> {}

type DeepReadonlyObject8051<T> = {
  readonly [P in keyof T]: DeepReadonly8051<T[P]>;
};

type UnionToIntersection8051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8051<T> = UnionToIntersection8051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8051<T extends unknown[], V> = [...T, V];

type TuplifyUnion8051<T, L = LastOf8051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8051<TuplifyUnion8051<Exclude<T, L>>, L>;

type DeepPartial8051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8051<T[P]> }
  : T;

type Paths8051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8051<K, Paths8051<T[K], Prev8051[D]>> : never }[keyof T]
  : never;

type Prev8051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8051 {
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

type ConfigPaths8051 = Paths8051<NestedConfig8051>;

interface HeavyProps8051 {
  config: DeepPartial8051<NestedConfig8051>;
  path?: ConfigPaths8051;
}

const HeavyComponent8051 = memo(function HeavyComponent8051({ config }: HeavyProps8051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8051.displayName = 'HeavyComponent8051';
export default HeavyComponent8051;
