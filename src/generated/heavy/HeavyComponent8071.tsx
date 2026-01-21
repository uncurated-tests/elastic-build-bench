'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8071<T> = T extends (infer U)[]
  ? DeepReadonlyArray8071<U>
  : T extends object
  ? DeepReadonlyObject8071<T>
  : T;

interface DeepReadonlyArray8071<T> extends ReadonlyArray<DeepReadonly8071<T>> {}

type DeepReadonlyObject8071<T> = {
  readonly [P in keyof T]: DeepReadonly8071<T[P]>;
};

type UnionToIntersection8071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8071<T> = UnionToIntersection8071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8071<T extends unknown[], V> = [...T, V];

type TuplifyUnion8071<T, L = LastOf8071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8071<TuplifyUnion8071<Exclude<T, L>>, L>;

type DeepPartial8071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8071<T[P]> }
  : T;

type Paths8071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8071<K, Paths8071<T[K], Prev8071[D]>> : never }[keyof T]
  : never;

type Prev8071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8071 {
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

type ConfigPaths8071 = Paths8071<NestedConfig8071>;

interface HeavyProps8071 {
  config: DeepPartial8071<NestedConfig8071>;
  path?: ConfigPaths8071;
}

const HeavyComponent8071 = memo(function HeavyComponent8071({ config }: HeavyProps8071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8071.displayName = 'HeavyComponent8071';
export default HeavyComponent8071;
