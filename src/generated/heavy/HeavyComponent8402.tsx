'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8402<T> = T extends (infer U)[]
  ? DeepReadonlyArray8402<U>
  : T extends object
  ? DeepReadonlyObject8402<T>
  : T;

interface DeepReadonlyArray8402<T> extends ReadonlyArray<DeepReadonly8402<T>> {}

type DeepReadonlyObject8402<T> = {
  readonly [P in keyof T]: DeepReadonly8402<T[P]>;
};

type UnionToIntersection8402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8402<T> = UnionToIntersection8402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8402<T extends unknown[], V> = [...T, V];

type TuplifyUnion8402<T, L = LastOf8402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8402<TuplifyUnion8402<Exclude<T, L>>, L>;

type DeepPartial8402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8402<T[P]> }
  : T;

type Paths8402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8402<K, Paths8402<T[K], Prev8402[D]>> : never }[keyof T]
  : never;

type Prev8402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8402 {
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

type ConfigPaths8402 = Paths8402<NestedConfig8402>;

interface HeavyProps8402 {
  config: DeepPartial8402<NestedConfig8402>;
  path?: ConfigPaths8402;
}

const HeavyComponent8402 = memo(function HeavyComponent8402({ config }: HeavyProps8402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8402.displayName = 'HeavyComponent8402';
export default HeavyComponent8402;
