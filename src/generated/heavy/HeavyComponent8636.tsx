'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8636<T> = T extends (infer U)[]
  ? DeepReadonlyArray8636<U>
  : T extends object
  ? DeepReadonlyObject8636<T>
  : T;

interface DeepReadonlyArray8636<T> extends ReadonlyArray<DeepReadonly8636<T>> {}

type DeepReadonlyObject8636<T> = {
  readonly [P in keyof T]: DeepReadonly8636<T[P]>;
};

type UnionToIntersection8636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8636<T> = UnionToIntersection8636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8636<T extends unknown[], V> = [...T, V];

type TuplifyUnion8636<T, L = LastOf8636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8636<TuplifyUnion8636<Exclude<T, L>>, L>;

type DeepPartial8636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8636<T[P]> }
  : T;

type Paths8636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8636<K, Paths8636<T[K], Prev8636[D]>> : never }[keyof T]
  : never;

type Prev8636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8636 {
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

type ConfigPaths8636 = Paths8636<NestedConfig8636>;

interface HeavyProps8636 {
  config: DeepPartial8636<NestedConfig8636>;
  path?: ConfigPaths8636;
}

const HeavyComponent8636 = memo(function HeavyComponent8636({ config }: HeavyProps8636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8636.displayName = 'HeavyComponent8636';
export default HeavyComponent8636;
