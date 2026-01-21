'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12751<T> = T extends (infer U)[]
  ? DeepReadonlyArray12751<U>
  : T extends object
  ? DeepReadonlyObject12751<T>
  : T;

interface DeepReadonlyArray12751<T> extends ReadonlyArray<DeepReadonly12751<T>> {}

type DeepReadonlyObject12751<T> = {
  readonly [P in keyof T]: DeepReadonly12751<T[P]>;
};

type UnionToIntersection12751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12751<T> = UnionToIntersection12751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12751<T extends unknown[], V> = [...T, V];

type TuplifyUnion12751<T, L = LastOf12751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12751<TuplifyUnion12751<Exclude<T, L>>, L>;

type DeepPartial12751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12751<T[P]> }
  : T;

type Paths12751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12751<K, Paths12751<T[K], Prev12751[D]>> : never }[keyof T]
  : never;

type Prev12751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12751 {
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

type ConfigPaths12751 = Paths12751<NestedConfig12751>;

interface HeavyProps12751 {
  config: DeepPartial12751<NestedConfig12751>;
  path?: ConfigPaths12751;
}

const HeavyComponent12751 = memo(function HeavyComponent12751({ config }: HeavyProps12751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12751.displayName = 'HeavyComponent12751';
export default HeavyComponent12751;
