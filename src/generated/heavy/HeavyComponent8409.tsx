'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8409<T> = T extends (infer U)[]
  ? DeepReadonlyArray8409<U>
  : T extends object
  ? DeepReadonlyObject8409<T>
  : T;

interface DeepReadonlyArray8409<T> extends ReadonlyArray<DeepReadonly8409<T>> {}

type DeepReadonlyObject8409<T> = {
  readonly [P in keyof T]: DeepReadonly8409<T[P]>;
};

type UnionToIntersection8409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8409<T> = UnionToIntersection8409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8409<T extends unknown[], V> = [...T, V];

type TuplifyUnion8409<T, L = LastOf8409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8409<TuplifyUnion8409<Exclude<T, L>>, L>;

type DeepPartial8409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8409<T[P]> }
  : T;

type Paths8409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8409<K, Paths8409<T[K], Prev8409[D]>> : never }[keyof T]
  : never;

type Prev8409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8409 {
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

type ConfigPaths8409 = Paths8409<NestedConfig8409>;

interface HeavyProps8409 {
  config: DeepPartial8409<NestedConfig8409>;
  path?: ConfigPaths8409;
}

const HeavyComponent8409 = memo(function HeavyComponent8409({ config }: HeavyProps8409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8409.displayName = 'HeavyComponent8409';
export default HeavyComponent8409;
