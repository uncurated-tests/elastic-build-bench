'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8923<T> = T extends (infer U)[]
  ? DeepReadonlyArray8923<U>
  : T extends object
  ? DeepReadonlyObject8923<T>
  : T;

interface DeepReadonlyArray8923<T> extends ReadonlyArray<DeepReadonly8923<T>> {}

type DeepReadonlyObject8923<T> = {
  readonly [P in keyof T]: DeepReadonly8923<T[P]>;
};

type UnionToIntersection8923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8923<T> = UnionToIntersection8923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8923<T extends unknown[], V> = [...T, V];

type TuplifyUnion8923<T, L = LastOf8923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8923<TuplifyUnion8923<Exclude<T, L>>, L>;

type DeepPartial8923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8923<T[P]> }
  : T;

type Paths8923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8923<K, Paths8923<T[K], Prev8923[D]>> : never }[keyof T]
  : never;

type Prev8923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8923 {
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

type ConfigPaths8923 = Paths8923<NestedConfig8923>;

interface HeavyProps8923 {
  config: DeepPartial8923<NestedConfig8923>;
  path?: ConfigPaths8923;
}

const HeavyComponent8923 = memo(function HeavyComponent8923({ config }: HeavyProps8923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8923.displayName = 'HeavyComponent8923';
export default HeavyComponent8923;
