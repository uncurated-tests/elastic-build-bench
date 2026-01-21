'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8194<T> = T extends (infer U)[]
  ? DeepReadonlyArray8194<U>
  : T extends object
  ? DeepReadonlyObject8194<T>
  : T;

interface DeepReadonlyArray8194<T> extends ReadonlyArray<DeepReadonly8194<T>> {}

type DeepReadonlyObject8194<T> = {
  readonly [P in keyof T]: DeepReadonly8194<T[P]>;
};

type UnionToIntersection8194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8194<T> = UnionToIntersection8194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8194<T extends unknown[], V> = [...T, V];

type TuplifyUnion8194<T, L = LastOf8194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8194<TuplifyUnion8194<Exclude<T, L>>, L>;

type DeepPartial8194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8194<T[P]> }
  : T;

type Paths8194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8194<K, Paths8194<T[K], Prev8194[D]>> : never }[keyof T]
  : never;

type Prev8194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8194 {
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

type ConfigPaths8194 = Paths8194<NestedConfig8194>;

interface HeavyProps8194 {
  config: DeepPartial8194<NestedConfig8194>;
  path?: ConfigPaths8194;
}

const HeavyComponent8194 = memo(function HeavyComponent8194({ config }: HeavyProps8194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8194.displayName = 'HeavyComponent8194';
export default HeavyComponent8194;
