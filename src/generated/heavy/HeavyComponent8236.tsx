'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8236<T> = T extends (infer U)[]
  ? DeepReadonlyArray8236<U>
  : T extends object
  ? DeepReadonlyObject8236<T>
  : T;

interface DeepReadonlyArray8236<T> extends ReadonlyArray<DeepReadonly8236<T>> {}

type DeepReadonlyObject8236<T> = {
  readonly [P in keyof T]: DeepReadonly8236<T[P]>;
};

type UnionToIntersection8236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8236<T> = UnionToIntersection8236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8236<T extends unknown[], V> = [...T, V];

type TuplifyUnion8236<T, L = LastOf8236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8236<TuplifyUnion8236<Exclude<T, L>>, L>;

type DeepPartial8236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8236<T[P]> }
  : T;

type Paths8236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8236<K, Paths8236<T[K], Prev8236[D]>> : never }[keyof T]
  : never;

type Prev8236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8236 {
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

type ConfigPaths8236 = Paths8236<NestedConfig8236>;

interface HeavyProps8236 {
  config: DeepPartial8236<NestedConfig8236>;
  path?: ConfigPaths8236;
}

const HeavyComponent8236 = memo(function HeavyComponent8236({ config }: HeavyProps8236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8236.displayName = 'HeavyComponent8236';
export default HeavyComponent8236;
