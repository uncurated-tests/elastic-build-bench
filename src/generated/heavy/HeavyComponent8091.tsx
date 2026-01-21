'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8091<T> = T extends (infer U)[]
  ? DeepReadonlyArray8091<U>
  : T extends object
  ? DeepReadonlyObject8091<T>
  : T;

interface DeepReadonlyArray8091<T> extends ReadonlyArray<DeepReadonly8091<T>> {}

type DeepReadonlyObject8091<T> = {
  readonly [P in keyof T]: DeepReadonly8091<T[P]>;
};

type UnionToIntersection8091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8091<T> = UnionToIntersection8091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8091<T extends unknown[], V> = [...T, V];

type TuplifyUnion8091<T, L = LastOf8091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8091<TuplifyUnion8091<Exclude<T, L>>, L>;

type DeepPartial8091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8091<T[P]> }
  : T;

type Paths8091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8091<K, Paths8091<T[K], Prev8091[D]>> : never }[keyof T]
  : never;

type Prev8091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8091 {
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

type ConfigPaths8091 = Paths8091<NestedConfig8091>;

interface HeavyProps8091 {
  config: DeepPartial8091<NestedConfig8091>;
  path?: ConfigPaths8091;
}

const HeavyComponent8091 = memo(function HeavyComponent8091({ config }: HeavyProps8091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8091.displayName = 'HeavyComponent8091';
export default HeavyComponent8091;
