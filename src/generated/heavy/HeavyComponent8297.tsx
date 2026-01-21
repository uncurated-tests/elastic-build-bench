'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8297<T> = T extends (infer U)[]
  ? DeepReadonlyArray8297<U>
  : T extends object
  ? DeepReadonlyObject8297<T>
  : T;

interface DeepReadonlyArray8297<T> extends ReadonlyArray<DeepReadonly8297<T>> {}

type DeepReadonlyObject8297<T> = {
  readonly [P in keyof T]: DeepReadonly8297<T[P]>;
};

type UnionToIntersection8297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8297<T> = UnionToIntersection8297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8297<T extends unknown[], V> = [...T, V];

type TuplifyUnion8297<T, L = LastOf8297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8297<TuplifyUnion8297<Exclude<T, L>>, L>;

type DeepPartial8297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8297<T[P]> }
  : T;

type Paths8297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8297<K, Paths8297<T[K], Prev8297[D]>> : never }[keyof T]
  : never;

type Prev8297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8297 {
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

type ConfigPaths8297 = Paths8297<NestedConfig8297>;

interface HeavyProps8297 {
  config: DeepPartial8297<NestedConfig8297>;
  path?: ConfigPaths8297;
}

const HeavyComponent8297 = memo(function HeavyComponent8297({ config }: HeavyProps8297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8297.displayName = 'HeavyComponent8297';
export default HeavyComponent8297;
