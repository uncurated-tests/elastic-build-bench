'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8707<T> = T extends (infer U)[]
  ? DeepReadonlyArray8707<U>
  : T extends object
  ? DeepReadonlyObject8707<T>
  : T;

interface DeepReadonlyArray8707<T> extends ReadonlyArray<DeepReadonly8707<T>> {}

type DeepReadonlyObject8707<T> = {
  readonly [P in keyof T]: DeepReadonly8707<T[P]>;
};

type UnionToIntersection8707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8707<T> = UnionToIntersection8707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8707<T extends unknown[], V> = [...T, V];

type TuplifyUnion8707<T, L = LastOf8707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8707<TuplifyUnion8707<Exclude<T, L>>, L>;

type DeepPartial8707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8707<T[P]> }
  : T;

type Paths8707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8707<K, Paths8707<T[K], Prev8707[D]>> : never }[keyof T]
  : never;

type Prev8707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8707 {
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

type ConfigPaths8707 = Paths8707<NestedConfig8707>;

interface HeavyProps8707 {
  config: DeepPartial8707<NestedConfig8707>;
  path?: ConfigPaths8707;
}

const HeavyComponent8707 = memo(function HeavyComponent8707({ config }: HeavyProps8707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8707.displayName = 'HeavyComponent8707';
export default HeavyComponent8707;
