'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8126<T> = T extends (infer U)[]
  ? DeepReadonlyArray8126<U>
  : T extends object
  ? DeepReadonlyObject8126<T>
  : T;

interface DeepReadonlyArray8126<T> extends ReadonlyArray<DeepReadonly8126<T>> {}

type DeepReadonlyObject8126<T> = {
  readonly [P in keyof T]: DeepReadonly8126<T[P]>;
};

type UnionToIntersection8126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8126<T> = UnionToIntersection8126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8126<T extends unknown[], V> = [...T, V];

type TuplifyUnion8126<T, L = LastOf8126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8126<TuplifyUnion8126<Exclude<T, L>>, L>;

type DeepPartial8126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8126<T[P]> }
  : T;

type Paths8126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8126<K, Paths8126<T[K], Prev8126[D]>> : never }[keyof T]
  : never;

type Prev8126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8126 {
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

type ConfigPaths8126 = Paths8126<NestedConfig8126>;

interface HeavyProps8126 {
  config: DeepPartial8126<NestedConfig8126>;
  path?: ConfigPaths8126;
}

const HeavyComponent8126 = memo(function HeavyComponent8126({ config }: HeavyProps8126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8126.displayName = 'HeavyComponent8126';
export default HeavyComponent8126;
