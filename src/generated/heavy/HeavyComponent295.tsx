'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly295<T> = T extends (infer U)[]
  ? DeepReadonlyArray295<U>
  : T extends object
  ? DeepReadonlyObject295<T>
  : T;

interface DeepReadonlyArray295<T> extends ReadonlyArray<DeepReadonly295<T>> {}

type DeepReadonlyObject295<T> = {
  readonly [P in keyof T]: DeepReadonly295<T[P]>;
};

type UnionToIntersection295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf295<T> = UnionToIntersection295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push295<T extends unknown[], V> = [...T, V];

type TuplifyUnion295<T, L = LastOf295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push295<TuplifyUnion295<Exclude<T, L>>, L>;

type DeepPartial295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial295<T[P]> }
  : T;

type Paths295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join295<K, Paths295<T[K], Prev295[D]>> : never }[keyof T]
  : never;

type Prev295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig295 {
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

type ConfigPaths295 = Paths295<NestedConfig295>;

interface HeavyProps295 {
  config: DeepPartial295<NestedConfig295>;
  path?: ConfigPaths295;
}

const HeavyComponent295 = memo(function HeavyComponent295({ config }: HeavyProps295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent295.displayName = 'HeavyComponent295';
export default HeavyComponent295;
