'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8237<T> = T extends (infer U)[]
  ? DeepReadonlyArray8237<U>
  : T extends object
  ? DeepReadonlyObject8237<T>
  : T;

interface DeepReadonlyArray8237<T> extends ReadonlyArray<DeepReadonly8237<T>> {}

type DeepReadonlyObject8237<T> = {
  readonly [P in keyof T]: DeepReadonly8237<T[P]>;
};

type UnionToIntersection8237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8237<T> = UnionToIntersection8237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8237<T extends unknown[], V> = [...T, V];

type TuplifyUnion8237<T, L = LastOf8237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8237<TuplifyUnion8237<Exclude<T, L>>, L>;

type DeepPartial8237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8237<T[P]> }
  : T;

type Paths8237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8237<K, Paths8237<T[K], Prev8237[D]>> : never }[keyof T]
  : never;

type Prev8237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8237 {
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

type ConfigPaths8237 = Paths8237<NestedConfig8237>;

interface HeavyProps8237 {
  config: DeepPartial8237<NestedConfig8237>;
  path?: ConfigPaths8237;
}

const HeavyComponent8237 = memo(function HeavyComponent8237({ config }: HeavyProps8237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8237.displayName = 'HeavyComponent8237';
export default HeavyComponent8237;
