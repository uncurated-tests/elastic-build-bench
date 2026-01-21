'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8302<T> = T extends (infer U)[]
  ? DeepReadonlyArray8302<U>
  : T extends object
  ? DeepReadonlyObject8302<T>
  : T;

interface DeepReadonlyArray8302<T> extends ReadonlyArray<DeepReadonly8302<T>> {}

type DeepReadonlyObject8302<T> = {
  readonly [P in keyof T]: DeepReadonly8302<T[P]>;
};

type UnionToIntersection8302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8302<T> = UnionToIntersection8302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8302<T extends unknown[], V> = [...T, V];

type TuplifyUnion8302<T, L = LastOf8302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8302<TuplifyUnion8302<Exclude<T, L>>, L>;

type DeepPartial8302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8302<T[P]> }
  : T;

type Paths8302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8302<K, Paths8302<T[K], Prev8302[D]>> : never }[keyof T]
  : never;

type Prev8302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8302 {
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

type ConfigPaths8302 = Paths8302<NestedConfig8302>;

interface HeavyProps8302 {
  config: DeepPartial8302<NestedConfig8302>;
  path?: ConfigPaths8302;
}

const HeavyComponent8302 = memo(function HeavyComponent8302({ config }: HeavyProps8302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8302.displayName = 'HeavyComponent8302';
export default HeavyComponent8302;
