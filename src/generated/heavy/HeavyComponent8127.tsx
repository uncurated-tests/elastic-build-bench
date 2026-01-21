'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8127<T> = T extends (infer U)[]
  ? DeepReadonlyArray8127<U>
  : T extends object
  ? DeepReadonlyObject8127<T>
  : T;

interface DeepReadonlyArray8127<T> extends ReadonlyArray<DeepReadonly8127<T>> {}

type DeepReadonlyObject8127<T> = {
  readonly [P in keyof T]: DeepReadonly8127<T[P]>;
};

type UnionToIntersection8127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8127<T> = UnionToIntersection8127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8127<T extends unknown[], V> = [...T, V];

type TuplifyUnion8127<T, L = LastOf8127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8127<TuplifyUnion8127<Exclude<T, L>>, L>;

type DeepPartial8127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8127<T[P]> }
  : T;

type Paths8127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8127<K, Paths8127<T[K], Prev8127[D]>> : never }[keyof T]
  : never;

type Prev8127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8127 {
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

type ConfigPaths8127 = Paths8127<NestedConfig8127>;

interface HeavyProps8127 {
  config: DeepPartial8127<NestedConfig8127>;
  path?: ConfigPaths8127;
}

const HeavyComponent8127 = memo(function HeavyComponent8127({ config }: HeavyProps8127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8127.displayName = 'HeavyComponent8127';
export default HeavyComponent8127;
