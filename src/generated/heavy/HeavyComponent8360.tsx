'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8360<T> = T extends (infer U)[]
  ? DeepReadonlyArray8360<U>
  : T extends object
  ? DeepReadonlyObject8360<T>
  : T;

interface DeepReadonlyArray8360<T> extends ReadonlyArray<DeepReadonly8360<T>> {}

type DeepReadonlyObject8360<T> = {
  readonly [P in keyof T]: DeepReadonly8360<T[P]>;
};

type UnionToIntersection8360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8360<T> = UnionToIntersection8360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8360<T extends unknown[], V> = [...T, V];

type TuplifyUnion8360<T, L = LastOf8360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8360<TuplifyUnion8360<Exclude<T, L>>, L>;

type DeepPartial8360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8360<T[P]> }
  : T;

type Paths8360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8360<K, Paths8360<T[K], Prev8360[D]>> : never }[keyof T]
  : never;

type Prev8360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8360 {
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

type ConfigPaths8360 = Paths8360<NestedConfig8360>;

interface HeavyProps8360 {
  config: DeepPartial8360<NestedConfig8360>;
  path?: ConfigPaths8360;
}

const HeavyComponent8360 = memo(function HeavyComponent8360({ config }: HeavyProps8360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8360.displayName = 'HeavyComponent8360';
export default HeavyComponent8360;
