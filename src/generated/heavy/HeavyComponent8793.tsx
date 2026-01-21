'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8793<T> = T extends (infer U)[]
  ? DeepReadonlyArray8793<U>
  : T extends object
  ? DeepReadonlyObject8793<T>
  : T;

interface DeepReadonlyArray8793<T> extends ReadonlyArray<DeepReadonly8793<T>> {}

type DeepReadonlyObject8793<T> = {
  readonly [P in keyof T]: DeepReadonly8793<T[P]>;
};

type UnionToIntersection8793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8793<T> = UnionToIntersection8793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8793<T extends unknown[], V> = [...T, V];

type TuplifyUnion8793<T, L = LastOf8793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8793<TuplifyUnion8793<Exclude<T, L>>, L>;

type DeepPartial8793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8793<T[P]> }
  : T;

type Paths8793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8793<K, Paths8793<T[K], Prev8793[D]>> : never }[keyof T]
  : never;

type Prev8793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8793 {
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

type ConfigPaths8793 = Paths8793<NestedConfig8793>;

interface HeavyProps8793 {
  config: DeepPartial8793<NestedConfig8793>;
  path?: ConfigPaths8793;
}

const HeavyComponent8793 = memo(function HeavyComponent8793({ config }: HeavyProps8793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8793.displayName = 'HeavyComponent8793';
export default HeavyComponent8793;
