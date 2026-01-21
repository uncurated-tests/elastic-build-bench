'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly781<T> = T extends (infer U)[]
  ? DeepReadonlyArray781<U>
  : T extends object
  ? DeepReadonlyObject781<T>
  : T;

interface DeepReadonlyArray781<T> extends ReadonlyArray<DeepReadonly781<T>> {}

type DeepReadonlyObject781<T> = {
  readonly [P in keyof T]: DeepReadonly781<T[P]>;
};

type UnionToIntersection781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf781<T> = UnionToIntersection781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push781<T extends unknown[], V> = [...T, V];

type TuplifyUnion781<T, L = LastOf781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push781<TuplifyUnion781<Exclude<T, L>>, L>;

type DeepPartial781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial781<T[P]> }
  : T;

type Paths781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join781<K, Paths781<T[K], Prev781[D]>> : never }[keyof T]
  : never;

type Prev781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig781 {
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

type ConfigPaths781 = Paths781<NestedConfig781>;

interface HeavyProps781 {
  config: DeepPartial781<NestedConfig781>;
  path?: ConfigPaths781;
}

const HeavyComponent781 = memo(function HeavyComponent781({ config }: HeavyProps781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent781.displayName = 'HeavyComponent781';
export default HeavyComponent781;
