'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2587<T> = T extends (infer U)[]
  ? DeepReadonlyArray2587<U>
  : T extends object
  ? DeepReadonlyObject2587<T>
  : T;

interface DeepReadonlyArray2587<T> extends ReadonlyArray<DeepReadonly2587<T>> {}

type DeepReadonlyObject2587<T> = {
  readonly [P in keyof T]: DeepReadonly2587<T[P]>;
};

type UnionToIntersection2587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2587<T> = UnionToIntersection2587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2587<T extends unknown[], V> = [...T, V];

type TuplifyUnion2587<T, L = LastOf2587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2587<TuplifyUnion2587<Exclude<T, L>>, L>;

type DeepPartial2587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2587<T[P]> }
  : T;

type Paths2587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2587<K, Paths2587<T[K], Prev2587[D]>> : never }[keyof T]
  : never;

type Prev2587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2587 {
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

type ConfigPaths2587 = Paths2587<NestedConfig2587>;

interface HeavyProps2587 {
  config: DeepPartial2587<NestedConfig2587>;
  path?: ConfigPaths2587;
}

const HeavyComponent2587 = memo(function HeavyComponent2587({ config }: HeavyProps2587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2587.displayName = 'HeavyComponent2587';
export default HeavyComponent2587;
