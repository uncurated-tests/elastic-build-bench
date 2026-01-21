'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8747<T> = T extends (infer U)[]
  ? DeepReadonlyArray8747<U>
  : T extends object
  ? DeepReadonlyObject8747<T>
  : T;

interface DeepReadonlyArray8747<T> extends ReadonlyArray<DeepReadonly8747<T>> {}

type DeepReadonlyObject8747<T> = {
  readonly [P in keyof T]: DeepReadonly8747<T[P]>;
};

type UnionToIntersection8747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8747<T> = UnionToIntersection8747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8747<T extends unknown[], V> = [...T, V];

type TuplifyUnion8747<T, L = LastOf8747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8747<TuplifyUnion8747<Exclude<T, L>>, L>;

type DeepPartial8747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8747<T[P]> }
  : T;

type Paths8747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8747<K, Paths8747<T[K], Prev8747[D]>> : never }[keyof T]
  : never;

type Prev8747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8747 {
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

type ConfigPaths8747 = Paths8747<NestedConfig8747>;

interface HeavyProps8747 {
  config: DeepPartial8747<NestedConfig8747>;
  path?: ConfigPaths8747;
}

const HeavyComponent8747 = memo(function HeavyComponent8747({ config }: HeavyProps8747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8747.displayName = 'HeavyComponent8747';
export default HeavyComponent8747;
