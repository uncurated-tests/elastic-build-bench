'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8956<T> = T extends (infer U)[]
  ? DeepReadonlyArray8956<U>
  : T extends object
  ? DeepReadonlyObject8956<T>
  : T;

interface DeepReadonlyArray8956<T> extends ReadonlyArray<DeepReadonly8956<T>> {}

type DeepReadonlyObject8956<T> = {
  readonly [P in keyof T]: DeepReadonly8956<T[P]>;
};

type UnionToIntersection8956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8956<T> = UnionToIntersection8956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8956<T extends unknown[], V> = [...T, V];

type TuplifyUnion8956<T, L = LastOf8956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8956<TuplifyUnion8956<Exclude<T, L>>, L>;

type DeepPartial8956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8956<T[P]> }
  : T;

type Paths8956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8956<K, Paths8956<T[K], Prev8956[D]>> : never }[keyof T]
  : never;

type Prev8956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8956 {
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

type ConfigPaths8956 = Paths8956<NestedConfig8956>;

interface HeavyProps8956 {
  config: DeepPartial8956<NestedConfig8956>;
  path?: ConfigPaths8956;
}

const HeavyComponent8956 = memo(function HeavyComponent8956({ config }: HeavyProps8956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8956.displayName = 'HeavyComponent8956';
export default HeavyComponent8956;
