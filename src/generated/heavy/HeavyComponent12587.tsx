'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12587<T> = T extends (infer U)[]
  ? DeepReadonlyArray12587<U>
  : T extends object
  ? DeepReadonlyObject12587<T>
  : T;

interface DeepReadonlyArray12587<T> extends ReadonlyArray<DeepReadonly12587<T>> {}

type DeepReadonlyObject12587<T> = {
  readonly [P in keyof T]: DeepReadonly12587<T[P]>;
};

type UnionToIntersection12587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12587<T> = UnionToIntersection12587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12587<T extends unknown[], V> = [...T, V];

type TuplifyUnion12587<T, L = LastOf12587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12587<TuplifyUnion12587<Exclude<T, L>>, L>;

type DeepPartial12587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12587<T[P]> }
  : T;

type Paths12587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12587<K, Paths12587<T[K], Prev12587[D]>> : never }[keyof T]
  : never;

type Prev12587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12587 {
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

type ConfigPaths12587 = Paths12587<NestedConfig12587>;

interface HeavyProps12587 {
  config: DeepPartial12587<NestedConfig12587>;
  path?: ConfigPaths12587;
}

const HeavyComponent12587 = memo(function HeavyComponent12587({ config }: HeavyProps12587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12587.displayName = 'HeavyComponent12587';
export default HeavyComponent12587;
