'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8061<T> = T extends (infer U)[]
  ? DeepReadonlyArray8061<U>
  : T extends object
  ? DeepReadonlyObject8061<T>
  : T;

interface DeepReadonlyArray8061<T> extends ReadonlyArray<DeepReadonly8061<T>> {}

type DeepReadonlyObject8061<T> = {
  readonly [P in keyof T]: DeepReadonly8061<T[P]>;
};

type UnionToIntersection8061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8061<T> = UnionToIntersection8061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8061<T extends unknown[], V> = [...T, V];

type TuplifyUnion8061<T, L = LastOf8061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8061<TuplifyUnion8061<Exclude<T, L>>, L>;

type DeepPartial8061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8061<T[P]> }
  : T;

type Paths8061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8061<K, Paths8061<T[K], Prev8061[D]>> : never }[keyof T]
  : never;

type Prev8061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8061 {
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

type ConfigPaths8061 = Paths8061<NestedConfig8061>;

interface HeavyProps8061 {
  config: DeepPartial8061<NestedConfig8061>;
  path?: ConfigPaths8061;
}

const HeavyComponent8061 = memo(function HeavyComponent8061({ config }: HeavyProps8061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8061.displayName = 'HeavyComponent8061';
export default HeavyComponent8061;
