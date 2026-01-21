'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8004<T> = T extends (infer U)[]
  ? DeepReadonlyArray8004<U>
  : T extends object
  ? DeepReadonlyObject8004<T>
  : T;

interface DeepReadonlyArray8004<T> extends ReadonlyArray<DeepReadonly8004<T>> {}

type DeepReadonlyObject8004<T> = {
  readonly [P in keyof T]: DeepReadonly8004<T[P]>;
};

type UnionToIntersection8004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8004<T> = UnionToIntersection8004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8004<T extends unknown[], V> = [...T, V];

type TuplifyUnion8004<T, L = LastOf8004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8004<TuplifyUnion8004<Exclude<T, L>>, L>;

type DeepPartial8004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8004<T[P]> }
  : T;

type Paths8004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8004<K, Paths8004<T[K], Prev8004[D]>> : never }[keyof T]
  : never;

type Prev8004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8004 {
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

type ConfigPaths8004 = Paths8004<NestedConfig8004>;

interface HeavyProps8004 {
  config: DeepPartial8004<NestedConfig8004>;
  path?: ConfigPaths8004;
}

const HeavyComponent8004 = memo(function HeavyComponent8004({ config }: HeavyProps8004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8004.displayName = 'HeavyComponent8004';
export default HeavyComponent8004;
