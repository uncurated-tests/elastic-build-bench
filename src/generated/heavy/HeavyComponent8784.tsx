'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8784<T> = T extends (infer U)[]
  ? DeepReadonlyArray8784<U>
  : T extends object
  ? DeepReadonlyObject8784<T>
  : T;

interface DeepReadonlyArray8784<T> extends ReadonlyArray<DeepReadonly8784<T>> {}

type DeepReadonlyObject8784<T> = {
  readonly [P in keyof T]: DeepReadonly8784<T[P]>;
};

type UnionToIntersection8784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8784<T> = UnionToIntersection8784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8784<T extends unknown[], V> = [...T, V];

type TuplifyUnion8784<T, L = LastOf8784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8784<TuplifyUnion8784<Exclude<T, L>>, L>;

type DeepPartial8784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8784<T[P]> }
  : T;

type Paths8784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8784<K, Paths8784<T[K], Prev8784[D]>> : never }[keyof T]
  : never;

type Prev8784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8784 {
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

type ConfigPaths8784 = Paths8784<NestedConfig8784>;

interface HeavyProps8784 {
  config: DeepPartial8784<NestedConfig8784>;
  path?: ConfigPaths8784;
}

const HeavyComponent8784 = memo(function HeavyComponent8784({ config }: HeavyProps8784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8784.displayName = 'HeavyComponent8784';
export default HeavyComponent8784;
