'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14288<T> = T extends (infer U)[]
  ? DeepReadonlyArray14288<U>
  : T extends object
  ? DeepReadonlyObject14288<T>
  : T;

interface DeepReadonlyArray14288<T> extends ReadonlyArray<DeepReadonly14288<T>> {}

type DeepReadonlyObject14288<T> = {
  readonly [P in keyof T]: DeepReadonly14288<T[P]>;
};

type UnionToIntersection14288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14288<T> = UnionToIntersection14288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14288<T extends unknown[], V> = [...T, V];

type TuplifyUnion14288<T, L = LastOf14288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14288<TuplifyUnion14288<Exclude<T, L>>, L>;

type DeepPartial14288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14288<T[P]> }
  : T;

type Paths14288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14288<K, Paths14288<T[K], Prev14288[D]>> : never }[keyof T]
  : never;

type Prev14288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14288 {
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

type ConfigPaths14288 = Paths14288<NestedConfig14288>;

interface HeavyProps14288 {
  config: DeepPartial14288<NestedConfig14288>;
  path?: ConfigPaths14288;
}

const HeavyComponent14288 = memo(function HeavyComponent14288({ config }: HeavyProps14288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14288.displayName = 'HeavyComponent14288';
export default HeavyComponent14288;
