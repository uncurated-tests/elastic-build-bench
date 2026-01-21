'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8871<T> = T extends (infer U)[]
  ? DeepReadonlyArray8871<U>
  : T extends object
  ? DeepReadonlyObject8871<T>
  : T;

interface DeepReadonlyArray8871<T> extends ReadonlyArray<DeepReadonly8871<T>> {}

type DeepReadonlyObject8871<T> = {
  readonly [P in keyof T]: DeepReadonly8871<T[P]>;
};

type UnionToIntersection8871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8871<T> = UnionToIntersection8871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8871<T extends unknown[], V> = [...T, V];

type TuplifyUnion8871<T, L = LastOf8871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8871<TuplifyUnion8871<Exclude<T, L>>, L>;

type DeepPartial8871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8871<T[P]> }
  : T;

type Paths8871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8871<K, Paths8871<T[K], Prev8871[D]>> : never }[keyof T]
  : never;

type Prev8871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8871 {
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

type ConfigPaths8871 = Paths8871<NestedConfig8871>;

interface HeavyProps8871 {
  config: DeepPartial8871<NestedConfig8871>;
  path?: ConfigPaths8871;
}

const HeavyComponent8871 = memo(function HeavyComponent8871({ config }: HeavyProps8871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8871.displayName = 'HeavyComponent8871';
export default HeavyComponent8871;
